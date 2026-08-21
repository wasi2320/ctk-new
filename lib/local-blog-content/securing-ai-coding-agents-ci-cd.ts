export const securingAiCodingAgentsCiCdContent = `AI coding agents can safely participate in CI/CD when they are treated as untrusted automation with a named identity, narrowly scoped tools, short-lived credentials, isolated execution, mandatory security checks, and human-controlled production gates. Giving an agent the same access as a senior engineer is not a shortcut. It removes the separation of duties that protects source code, cloud accounts, and customer environments.

The secure pattern is straightforward: let the agent create a patch on a protected branch, run the patch through the same or stronger controls as human-authored code, and require authorized people to approve consequential changes. The model can suggest and prepare work. Identity, policy, deterministic tooling, and the deployment platform decide what is allowed.

## Why AI coding agents change the CI/CD threat model

Traditional CI systems execute predefined workflows from version-controlled files. Coding agents add a reasoning layer that reads natural-language instructions and chooses tools. The agent may inspect an issue, edit several files, install packages, invoke a shell, call external services, open a pull request, and react to test results. Each new capability increases agency and expands the attack surface.

AI can increase the volume and speed of changes, creating reviewer pressure and automation bias. GitHub's responsible-use documentation leaves users responsible for validating agent output, and its code review documentation presents AI review as a supplement to human review.

A secure design connects agent controls to established [DevOps practices](/devops), [security and compliance engineering](/security-and-compliance), and [infrastructure as code](/what-is-infrastructure-as-code). It does not create a separate, privileged path for AI-authored work.

## The risks to model explicitly

### Prompt injection from repository content

Issues, pull requests, source comments, README files, test fixtures, dependency output, logs, websites, and tool responses are untrusted. They can contain instructions intended to override the task, exfiltrate data, weaken tests, or invoke an unauthorized tool.

Treat retrieved content as data, never as policy. System-enforced tool permissions must take precedence over text the model reads. The agent should be unable to grant itself access, alter its guardrails, or bypass a required check even if a repository file explicitly asks it to do so.

### Excessive agency

An overly capable agent can turn one mistake into a cross-system event. Repository administration, workflow changes, package publication, cloud mutation, secret management, and production deployment should not share one identity.

Assign capabilities per task. An agent drafting an application patch may need read access to a repository and permission to push to a dedicated branch. It does not need permission to change branch protection, approve its own pull request, edit organization secrets, or deploy to production.

### Insecure output

Generated code can contain injection flaws, weak authorization, unsafe deserialization, missing error handling, exposed debug endpoints, insecure defaults, or subtle infrastructure changes. It may compile and still be unsafe. It may also remove a test or suppress a scanner to make the pipeline pass.

Review the full diff, including workflow files, lockfiles, generated assets, policies, tests, and configuration. Security acceptance must be based on deterministic checks and informed human review, not on the agent's explanation of its own patch.

### Secrets and proprietary data exposure

Source code, logs, issue content, environment variables, build artifacts, customer identifiers, credentials, and internal architecture may be sensitive. Limit which repositories and paths an agent can read. Do not place long-lived secrets in prompts, repository files, shell history, or broadly inherited runner environments.

Confirm the model provider's data handling, retention, residency, and training controls against organizational requirements. Redact unnecessary data before submission. Secret scanning is important, but preventing secret exposure is better than detecting it after a commit.

### Dependency and action supply chain

An agent may add a dependency because its API appears convenient, copy code from an untrusted source, or select a mutable CI action reference. That can introduce vulnerable, abandoned, malicious, or license-incompatible components.

Require dependency and lockfile review, software composition analysis, approved package policy, and provenance where available. Pin CI actions to reviewed immutable references. Restrict changes to workflows, registries, build images, agent tools, plugins, model endpoints, and instruction files.

## Give every agent a strong identity

Never let an agent operate under a shared human account. Use a dedicated machine or workload identity so audit records clearly distinguish the agent, the requesting user, the approving reviewer, and the deployment actor.

Prefer short-lived job credentials. For cloud access, use workload federation or an OIDC trust flow constrained by audience, repository, branch, environment, and workflow. Avoid static cloud keys in general CI secrets, and issue permission only at the stage of use.

Separate identities by environment and capability. A patch-generation identity should not inherit deployment rights. A staging deployment identity should not work in production. A production deployment identity should be invoked only by the protected deployment workflow after its approval conditions pass.

GitHub environments, branch protection, rulesets, required reviews, and status checks can help enforce these boundaries. A well-designed [GitOps workflow](/what-is-gitops) further separates the proposed configuration change from the controller that reconciles approved desired state.

## Restrict tools and execution

An agent should receive an allowlist of tools tailored to its task. Do not expose a general shell, unrestricted browser, arbitrary package installer, production CLI, and credential store when a repository read tool and patch writer are sufficient.

For every tool, define:

* Allowed operations and parameter schemas
* Repository, path, account, cluster, namespace, and environment scope
* Network destinations and protocols
* Maximum runtime, output size, resource use, and retry count
* Whether human approval is required before invocation
* The audit data recorded for the request and response

Run the agent in an ephemeral sandbox with limited resources, no host socket, no privileged mode, and no inherited credentials. Block unneeded access to cloud instance metadata, mount only required files, use a read-only base image, and dispose of the runner after the job.

Limit network egress to approved model endpoints, source hosts, package mirrors, and internal services. Route dependencies through a controlled mirror where feasible and verify integrity before installation.

Kill switches are essential. Operators need a quick way to revoke the agent's credentials, disable its app or workflow, block tool access, stop active jobs, and prevent new sessions. Test these controls before an incident.

## Build a protected pull request path

The safest default workflow is agent to branch to pull request to checks to human approval.

1. An authenticated user opens a bounded task with clear acceptance criteria.
2. The system creates an isolated runner and a dedicated short-lived agent identity.
3. The agent receives a clean checkout, an allowlisted tool set, and no production credential.
4. It creates a patch on a new branch. It cannot push to the default or release branch.
5. The pipeline validates file scope and flags changes to workflows, authorization, encryption, network policy, infrastructure, dependencies, and generated files for specialist review.
6. Automated tests and security controls run on the resulting code, not only on the agent's narrative.
7. A qualified human reviews the diff, scanner results, test evidence, and deployment impact.
8. Branch protection prevents the agent from approving or merging its own work and blocks merge until required checks pass.
9. Deployment uses a separate identity. Production requires an explicit environment approval and current artifact attestation.
10. Audit logs retain the request, identity, model and instruction version, tool calls, commit, approvals, check results, artifact, deployment, and rollback reference.

If an agent needs to respond to review feedback, each new commit should rerun the complete applicable control set. Prior approval should be dismissed when policy-relevant code changes.

The [EKS GitOps microservices case study](/eks-gitops-microservices-case-study) shows a useful pattern: CI checks artifacts, configuration stays explicit, GitOps reconciles approved state, and a human gates production. An AI author should preserve those boundaries.

## Required CI security checks

No single scanner establishes safety. Use layered controls appropriate to the languages, infrastructure, and risk profile.

### Static application security testing

SAST can identify patterns such as injection risks, unsafe APIs, and missing validation. Tune rules to the codebase, triage findings, and prevent agents from changing scanner configuration without designated review.

### Software composition analysis

SCA should inspect direct and transitive dependencies, known vulnerabilities, license policy, lockfile changes, and unexpected package sources. Review new dependencies for maintenance and provenance, not only current vulnerability counts.

### Infrastructure as code checks

Scan Terraform, Kubernetes manifests, Helm values, cloud templates, and policy files for public exposure, broad identity permissions, missing encryption, unsafe network paths, privileged workloads, mutable image tags, and destructive changes. A [CIS Kubernetes assessment](/cis-kubernetes-benchmark-assessment-case-study) demonstrates why configuration needs to be evaluated across control plane, workload, network, and node domains.

### Secret and sensitive data checks

Scan commits, history where appropriate, build output, container layers, and IaC plans for credentials and sensitive material. If a secret is exposed, revoke and rotate it. Deleting the text from the latest commit is not sufficient.

### Tests, policy, and artifact controls

Run unit, integration, authorization, negative, migration, and rollback tests as appropriate. Apply policy to source changes and deployment plans. Build controlled artifacts, record provenance, and deploy by immutable digest.

GitHub documents code scanning, secret scanning, dependency review, Dependabot, and related security capabilities. Tool availability and licensing vary, so teams should map required controls to their platform rather than assume a single product setting covers the pipeline.

## Protect production with human and deterministic gates

Production approval should show the reviewer exactly what is being deployed: commit, artifact digest, test and security results, infrastructure plan, target environment, change window, health criteria, and rollback procedure. The agent must not approve its own deployment or modify the required checks that guard it.

Use canary, blue-green, or progressive delivery when suitable. Define automatic stop conditions from health and SLO signals. The rollback mechanism must be tested and must not depend on the same AI system that proposed the change.

For regulated workloads, map agent activity to change, access, evidence, and segregation controls. The [PCI DSS enterprise case study](/pci-dss-enterprise-case-study) shows how several technical controls can be combined without treating automation as compliance.

## Control checklist

Use this checklist before enabling an AI coding agent in a repository:

* The agent has a dedicated identity and cannot impersonate a human reviewer.
* Credentials are short-lived, job-specific, and scoped by repository, branch, environment, and action.
* Tools and network destinations are allowlisted.
* Execution occurs in an ephemeral, non-privileged, sandboxed runner.
* Untrusted repository and ticket content cannot change system policy.
* The agent cannot read unnecessary secrets or proprietary repositories.
* The agent cannot push to protected branches, approve itself, or change branch protection.
* Workflow, dependency, authorization, policy, and infrastructure changes receive elevated review.
* SAST, SCA, IaC, secret, test, and policy checks run on every applicable revision.
* Production uses a separate identity and explicit human approval.
* Audit logs connect the request, agent, tools, commits, reviews, artifacts, and deployments.
* Kill switches and credential revocation have been tested.
* Rollback is deterministic, documented, and independent of the agent.
* Security owners periodically review permissions, prompts, tools, models, and exceptions.

## Roll out in stages

Start with well-tested repositories that have clear ownership and no production secrets. Allow only read access and suggested patches. Measure review rejection, security findings, escaped defects, dependency changes, policy exceptions, and review effort.

Next, let the agent open pull requests while retaining human review. Test malicious instructions, compromised dependency output, secret access, workflow changes, and outbound calls. Confirm controls block the behavior.

Expand scope only after evidence shows the identity, isolation, review, and recovery controls work. Teams designing these foundations can align the work with a broader [cloud security engagement](/security-and-compliance) or [DevOps consulting program](/consulting-and-advisory).

## Frequently asked questions

### Can an AI coding agent merge its own pull request?

It should not. Protected branches should require independent review and status checks, and the agent identity should be unable to approve or bypass those rules.

### Should a coding agent receive repository secrets?

Only if a narrowly defined task requires a specific secret and no safer mechanism exists. Prefer short-lived, task-scoped credentials issued at the stage of use.

### How do we reduce prompt injection risk?

Treat repository and external content as untrusted data. Enforce tool permissions outside the model, validate parameters, restrict egress, isolate execution, and require approval for consequential actions.

### Are SAST and dependency scanning enough for AI-generated code?

No. They are layers in a broader process that includes tests, IaC and secret checks, policy enforcement, human review, protected branches, artifact controls, and safe deployment.

### What is the safest first use case?

Use a read-only agent or let it prepare a patch in a well-tested, non-sensitive repository. Keep merge and deployment under independent human and platform control.

### What should a kill switch disable?

It should stop active jobs, prevent new sessions, revoke agent credentials, disable tool and network access, and block deployment paths without depending on the agent itself.

## Sources and further reading

* [GitHub Docs: About GitHub Copilot code review](https://docs.github.com/en/copilot/concepts/agents/code-review)
* [GitHub Docs: Responsible use of GitHub Copilot agents](https://docs.github.com/en/copilot/responsible-use/agents)
* [OpenSSF: Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [GitHub Docs: GitHub security features](https://docs.github.com/en/code-security/getting-started/github-security-features)
* [NIST: Secure Software Development Practices for Generative AI and Dual-Use Foundation Models](https://www.nist.gov/news-events/news/2024/07/secure-software-development-practices-generative-ai-and-dual-use-foundation)
`;

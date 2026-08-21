export const aiGeneratedInfrastructureAsCodeReviewChecklistContent = `## The short answer

Treat AI-generated infrastructure code as an untrusted draft, not as an approved design. The safe path is straightforward: define the intended architecture, constrain what the assistant can change, validate syntax and schemas, scan for security and secrets, inspect the actual plan or change set, require an accountable human approval, deploy progressively, and verify rollback or recovery.

This standard should apply to Terraform, CloudFormation, Kubernetes manifests, Helm charts, and pipeline YAML. The exact commands differ, but the review question stays the same: can the team prove what will change, why it is safe, who approved it, and how service will be restored if the assumption is wrong?

AI can speed up authoring. It cannot see every account policy, network dependency, regional limitation, service quota, data classification, or operational exception unless that context is deliberately provided. CodetoKloud's [DevOps services](/devops), [cloud engineering services](/cloud-service), and [security and compliance services](/security-and-compliance) help organizations create the controls and paved paths around infrastructure automation.

## Why infrastructure code needs a stricter review

Infrastructure definitions can create or destroy resources, change permissions, expose network paths, move data, and alter production deployments. Valid syntax does not prove safe behavior. An assistant may invent a dependency, use the wrong provider or API version, select a property unsupported in the target region, or generate a Helm value that the chart never reads.

GitHub warns that generated code can look valid while being incorrect or insecure. OpenSSF recommends checking secrets and dependencies, enforcing least privilege, and using security tests. Those are sensible defaults when a change can affect more than one application.

## Start with an explicit change contract

Before generation, write a short change contract that a reviewer can compare with the output. Include:

* The business and technical goal
* Accounts, subscriptions, projects, clusters, namespaces, and environments in scope
* Resources that may be created, modified, replaced, or deleted
* Required regions, versions, providers, modules, charts, and APIs
* Data classification, encryption, retention, backup, and residency needs
* Identity, network, observability, tagging, and cost constraints
* Availability requirements and allowed disruption
* Verification, rollback, recovery, and ownership

Do not paste credentials, customer data, incident exports, or unrestricted configuration into a prompt. Supply only approved context. Repository instructions should reference current standards and approved modules, and should be versioned and reviewed. The engineer requesting the change remains its owner.

## Apply deterministic checks before human interpretation

Deterministic tools should reject basic defects before a reviewer spends time reasoning about architecture. Run them in a clean CI environment using the same versions expected in delivery.

### Terraform

Run terraform fmt and terraform validate, use the committed lock file, verify provider and module sources, and apply approved static and security checks. Generate a plan with the intended workspace, backend, variables, credentials, and versions. Validate proves structure, not least privilege or acceptable replacement behavior.

### CloudFormation

Validate and lint the template, then apply CloudFormation Guard or the organization's policy engine. Confirm regional resource support and approved transforms. Inspect a change set before execution, especially IAM, replacement, deletion, retained resources, macros, and custom-resource code.

Teams choosing between these tools can use the [Terraform versus CloudFormation guide](/terraform-vs-cloudformation) to frame ownership and workflow decisions.

### Kubernetes manifests

Parse YAML and validate it against the target API. Use server-side dry-run or a path that includes admission controls and custom resource definitions. Confirm versions, namespaces, selectors, service accounts, resources, probes, disruption controls, scheduling, and security context.

Kubernetes Secrets are encoded, not automatically made safe by base64 representation. Confirm how secret data is created, encrypted, synchronized, mounted, rotated, and prevented from appearing in Git or logs. Review the [Kubernetes consulting service](/kubernetes) and [CIS Kubernetes assessment case study](/cis-kubernetes-benchmark-assessment-case-study) for the wider control areas a manifest review should consider.

### Helm

Run helm lint and render with the exact target values. Validate rendered manifests, not only templates. Review conditions, hooks, dependencies, custom resources, and immutable fields. Compare environment output so production values do not silently disable security or availability controls.

### Pipeline YAML

Validate the workflow with the platform parser and lint embedded shell or templates. Pin actions, plugins, images, and reusable workflows to reviewed versions. Confirm triggers, fork behavior, protected environments, concurrency, artifacts, timeouts, retries, and cancellation.

Review token permissions at the workflow and job level. Prefer short-lived identity federation over stored cloud keys. Ensure untrusted pull request content cannot reach privileged secrets or runners. [Automated deployment services](/automated_deployment) and the [EKS GitOps case study](/eks-gitops-microservices-case-study) show why promotion and approval boundaries should be explicit.

## Detect hallucinated resources and dependencies

Do not approve a resource because its name sounds right. Verify it against the target provider schema or official service API. Confirm the exact provider, module, chart, action, plugin, container image, and custom resource source.

For every new dependency, check:

* Does it exist in the approved registry or source repository?
* Is the publisher expected and the version real, compatible, and reproducibly pinned?
* Does it add executable hooks, plugins, macros, or custom resources?
* What permissions, network access, and data does it receive?
* Is an approved alternative already available?

Run dependency and container scanning, but do not interpret a clean scan as proof of trust. A legitimate package can still be unnecessary or overprivileged. A generated module can also reference output names that do not exist or create implicit dependencies that only fail during apply.

## Protect secrets, credentials, and state

Search source, history, plans, artifacts, fixtures, documentation, and logs for sensitive data. Reference an approved secret manager, use short-lived pipeline credentials, and prevent debug or error output from printing secrets.

Terraform state can contain sensitive values even when an output is marked sensitive. Use an approved remote backend with encryption, access controls, audit logging, locking where supported, backup, and a tested recovery process. Restrict access to state and plan artifacts. Review data sources and outputs for accidental disclosure.

For CloudFormation, use approved dynamic references and confirm that parameters, outputs, events, and logs do not disclose values. For Kubernetes, define who can read Secrets, how encryption at rest is configured, and how external secret synchronization is controlled. For pipelines, ensure secrets are scoped to protected environments and unavailable to untrusted jobs.

## Review security and operational intent

Static validation cannot judge architecture. A qualified reviewer should confirm:

* Identity uses intended principals, trust relationships, service accounts, boundaries, and least privilege.
* Public endpoints, ingress, egress, firewalls, TLS, private connectivity, DNS, and certificates match the change contract.
* Encryption, keys, backup, retention, replication, deletion protection, recovery, and restore testing protect stateful data.
* Workloads use trusted images, safe runtime settings, resources, probes, scaling, disruption controls, and monitoring.
* Metrics, logs, traces, alerts, tags, runbooks, ownership, and escalation are ready before production.
* Resource class, scale, transfer, logs, storage, quotas, and budget ownership are understood.

## Enforce policy as code, but keep human judgment

Policy as code converts important standards into repeatable tests. Examples include denying public storage, requiring encryption and tags, limiting IAM wildcards, restricting container privilege, allowing approved regions, or requiring workload resources and probes.

Apply policy to the rendered or planned result where possible. This catches issues hidden by module logic, chart conditions, or generated templates. Run policies in pull requests and again at the deployment boundary. Kubernetes admission policies can protect the cluster even when a repository check is bypassed.

Policies must be versioned, tested, owned, and reviewed for exceptions. A passing result means the artifact satisfied encoded rules. It does not mean the design is secure, resilient, or fit for purpose. Document risk acceptance with an owner, reason, scope, and expiry.

## Inspect the proposed change, not just the source

For Terraform, review the intended plan for create, update, replace, destroy, values known only after apply, identity, network exposure, and unexpected counts. When safe, promote the reviewed plan instead of creating a different one during deployment.

For CloudFormation, inspect the change set, including replacements and IAM changes. For Kubernetes and Helm, compare rendered desired state with the live target and consider admission mutations. For pipelines, inspect the expanded reusable workflow and the permissions effective at runtime.

Machine-generated summaries can help reviewers navigate a plan. They must not replace the original plan, change set, or diff. The reviewer should be able to trace every material action back to the approved intent.

## Require human approval at the right boundary

The approver needs context, the final artifact, and authority to stop the change. Require extra review for production, identity, network, encryption, data, deletion, state migration, shared platforms, and exceptions. Separate author and approver for high-risk changes, protect deployment environments, and review emergency paths afterward.

An AI reviewer can add findings. It should not approve its own generated change. Amazon Q Developer documents AI and rule-based review for infrastructure, secrets, security, and deployment risk, but any such output remains one input to the organization's control process.

## Deploy progressively and prove recovery

Use a representative preview environment, canary, limited traffic shift, or staged promotion. Split shared infrastructure changes into small steps. Define success and abort signals, observe health and security, and name who can continue, pause, or recover.

Rollback is not always a reverse command. Databases, queues, identity changes, certificates, state migrations, and deleted resources may require forward recovery or restoration from backup. Test the applicable recovery path. The [multi-brand AWS modernization case study](/multi-brand-aws-fargate-modernization-case-study) illustrates how phased migration and documented handoff support controlled change.

## Reusable AI-generated infrastructure review checklist

### Intent and ownership

* The change contract names scope, owner, desired outcome, and excluded resources.
* An accountable engineer can explain every material change.
* Sensitive information was not placed in prompts or generated artifacts.

### Source and dependencies

* Providers, modules, charts, actions, images, plugins, APIs, and CRDs exist and come from approved sources.
* Versions are compatible and reproducibly locked or pinned.
* New executable dependencies received explicit review.

### Deterministic validation

* Formatting, parsing, schema validation, linting, tests, and security scans pass in CI.
* Rendered manifests and expanded workflows were validated.
* Policy-as-code checks pass, or exceptions are documented with an owner and expiry.

### Secrets and state

* No secret, key, token, connection string, or sensitive data appears in source, history, plans, logs, or artifacts.
* State, plans, parameters, and pipeline credentials use approved storage and access controls.
* Rotation, backup, locking, and recovery requirements are addressed.

### Architecture and operations

* Identity is least privilege and trust relationships are intentional.
* Network exposure, encryption, resilience, observability, ownership, cost, and quotas were reviewed.
* Data replacement, deletion, retention, and restoration behavior is understood.

### Change proof

* The final Terraform plan, CloudFormation change set, Kubernetes diff, Helm render, or expanded pipeline was reviewed.
* Unexpected replacement, destruction, privilege, public access, or unresolved values were investigated.
* The approved artifact matches what deployment will execute.

### Release and recovery

* The required human approver reviewed the final change.
* Deployment is staged or canaried where practical, with success and abort signals.
* Rollback or forward recovery is documented, realistic, and owned.
* Post-deployment verification is defined.

## Frequently asked questions

### Is AI-generated Terraform safe to apply after terraform validate passes?

No. Validation checks configuration structure, not architectural intent or production impact. Review security findings, policies, and the plan produced for the intended target before approval.

### Can an AI reviewer approve code generated by another AI tool?

It can provide a useful independent signal, but it should not be the accountable approver. Deterministic checks and qualified human review are still required for material infrastructure changes.

### What is the most common hallucination risk in infrastructure code?

The assistant may invent or misapply a resource, property, module output, chart value, action version, API field, or dependency. Verify every new item against the target schema and official source.

### Should plans and state files be treated as sensitive?

Yes. They can contain resource identifiers, topology, outputs, and sensitive values. Store them with encryption and strict access control, and prevent them from leaking through logs or pull request artifacts.

### Is policy as code enough to make AI-generated infrastructure safe?

No. Policy checks only the rules that were encoded and the inputs they can inspect. Human reviewers must still assess architecture, operational fit, exceptions, and recovery.

### When should AI-generated infrastructure be rejected outright?

Reject it when the owner cannot explain the change, dependencies cannot be verified, sensitive data was exposed, the actual impact cannot be planned, required controls are bypassed, or no credible recovery path exists.

## Sources and further reading

* [OpenSSF Security-Focused Guide for AI Code Assistant Instructions](https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions)
* [NIST AI Risk Management Framework Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
* [GitHub responsible use guidance for Copilot agents](https://docs.github.com/en/copilot/responsible-use/agents)
* [Amazon Q Developer code review documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/code-reviews.html)
* [HashiCorp Terraform plan command documentation](https://developer.hashicorp.com/terraform/cli/commands/plan)
* [HashiCorp guidance for managing sensitive data in state](https://developer.hashicorp.com/terraform/language/manage-sensitive-data)
* [AWS CloudFormation change set documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html)
* [Kubernetes server-side field validation](https://kubernetes.io/docs/reference/using-api/api-concepts/#field-validation)
* [Kubernetes Secrets documentation](https://kubernetes.io/docs/concepts/configuration/secret/)
* [Helm lint command documentation](https://helm.sh/docs/helm/helm_lint/)
* [Helm template command documentation](https://helm.sh/docs/helm/helm_template/)
`;

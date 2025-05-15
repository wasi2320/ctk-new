"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
                <h1 className="text-9xl font-bold text-[#000209]">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Go Back
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-[#000209] text-white rounded-lg hover:bg-[#000209]/90 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
} 
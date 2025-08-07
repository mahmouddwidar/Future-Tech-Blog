"use client";
function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark-8 text-white px-4 py-8">
            <h1 className="text-2xl font-bold text-center mt-10">Something went wrong!</h1>
            <p className="text-center mt-4">Please try again later.</p>
            <p className="text-center mt-2">If the problem persists, contact support.</p>
        </div>
    )
}

export default Error;
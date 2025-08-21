
export async function addComment(params: { content: string; postId: number }) {
    try {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error("Failed to add comment");
        }

        const data = await response.json();
        return { error: false, message: data.msg };
        
    } catch (error) {
        console.error("Error adding comment: ", error);
        return { error: true, message: "Failed to add comment" };
    }
}
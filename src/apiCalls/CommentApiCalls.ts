
export async function addComment(params: { content: string; postId: number }) {
    try {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: true, message: data.msg || "Failed to add comment" };
        }

        return { error: false, message: data.msg };

    } catch (error) {
        console.error("Error adding comment: ", error);
        return { error: true, message: "Failed to add comment" };
    }
}

export async function updateComment(params: { commentId: number; content: string }) {
    try {
        const response = await fetch(`/api/comments/${params.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: params.content }),
        });
        
        const data = await response.json();

        if (!response.ok) {
            return { error: true, message: data.msg || "Failed to update comment" };
        }

        return { error: false, message: data.msg };

    } catch (error) {
        console.error("Error updating comment: ", error);
        return { error: true, message: "Failed to update comment" };
    }
    
}

export async function deleteComment(commentId: number) {
    try {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: true, message: data.msg || "Failed to delete comment" };
        }

        return { error: false, message: data.msg };

    } catch (error) {
        console.error("Error deleting comment: ", error);
        return { error: true, message: "Failed to delete comment" };
    }
}
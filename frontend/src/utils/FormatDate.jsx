export function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp));
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    return date.toLocaleString("en-US", options);
}

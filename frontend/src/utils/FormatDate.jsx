export function formatDate(timestamp) {
    const date = new Date(parseInt(timestamp));
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    return date.toLocaleString("en-US", options);
}

// Example Usage
const timestamp = 1704067200000;
const formattedDateTime = formatDate(timestamp);
console.log(formattedDateTime);
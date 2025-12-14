export async function registerUser(payload) {
    // Mock API endpoint (always responds with a created record)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!res.ok) {
      throw new Error("Registration failed. Please try again.");
    }
  
    return res.json();
  }
  
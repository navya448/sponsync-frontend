// Query Hook (auth.ts)
export const registerUser = async ({ email, password }: { email: string; password: string }) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
    const response = await fetch(`${backendUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }
  
    return response.json();
  };
  
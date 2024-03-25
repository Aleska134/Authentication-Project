const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token : null
		},
		actions: {
			onLoginClick: async (email, password) => {
                const response = await fetch(`${process.env.BACKEND_URL}/api/sign-up`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }) 
                });

                if (response.ok) {
                    const data = await response.json();
                    sessionStorage.setItem("token", data.access_token);
                    setStore({ token: data.access_token, bool: true }); 
                    return true; // Indicate login success
                } else {
                    return false; // Indicate login failure without setting a message here
                }
            },

			authenticateUser: async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/private`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } });
                    if (!response.ok) {
                        console.log("Failed to authenticate the user. Your token may be invalid or expired");
                        return false;
                    } else {
                        console.log("User authenticated successfully");
                        return true;
                    }
                } catch (error) {
                    console.log("Authentication error:", error);
                    return false;
                }
            },
			logOut: () => {
                setStore({ token: null });
                sessionStorage.clear();
            },
		}
	};
};

export default getState;

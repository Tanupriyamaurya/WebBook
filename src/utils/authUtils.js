// Save user login
export const loginUser = (email, password) => {
  if (!email || !password) return false;

  const user = { email, isLoggedIn: true };
  localStorage.setItem("user", JSON.stringify(user));
  return true;
};

// Get logged-in user
export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("user");
};

// Check login status
export const isLoggedIn = () => {
  const user = getUser();
  return user?.isLoggedIn === true;
};

import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthFormProps {
  initialMode?: string | null;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialMode }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Set initial mode based on URL parameter
  useEffect(() => {
    if (initialMode === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [initialMode]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="max-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-purple-200">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-purple-100 to-purple-200">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </h2>
        </div>

        {isLogin ? (
          <LoginForm onToggleForm={toggleForm} />
        ) : (
          <RegisterForm onToggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthForm;

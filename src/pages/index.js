import Head from "next/head";
import { useSession } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {

  const [user, loading, error] = useAuthState(auth);

console.log("From home",user)

const {data:session} = useSession();

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
    
    { user?.email && 
    <h2 style={{ textAlign: "center", marginTop:"10%" }}>
      Logged in user: {user?.email}
      </h2>}
    </div>
  );
};

export default HomePage;

import {SignIn} from "@clerk/nextjs";
import {Metadata, NextPage} from "next";

export const metadata: Metadata = {
    title: "Threads Sign In",
    description: "Meta Threads App"
};
const SignInPage: NextPage = () => {
    return (
        <>
            <SignIn />
        </>
    );
};

export default SignInPage;

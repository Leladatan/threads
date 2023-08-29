import {SignUp} from "@clerk/nextjs";
import {Metadata, NextPage} from "next";

export const metadata: Metadata = {
    title: "Threads Sign Up",
    description: "Meta Threads App"
};

const SignUpPage: NextPage = () => {
    return (
        <>
            <SignUp />
        </>
    );
};

export default SignUpPage;

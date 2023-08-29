import {Metadata, NextPage} from "next";
import AccountProfile from "@/app/(auth)/onboarding/components/AccountProfile";
import {currentUser} from "@clerk/nextjs";
import {User} from "@clerk/backend";

export const metadata: Metadata = {
    title: "Threads onboarding",
    description: "Meta Threads App"
};

const OnboardingPage: NextPage = async () => {
    const user: User | null = await currentUser();
    if (!user) return null;

    const userInfo = {}

    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        imageUrl: userInfo ? userInfo?.image : user.imageUrl,
    };

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="text-white text-3xl font-bold">
                Onboarding
            </h1>
            <p className="mt-3 font-medium text-white">
                Complete your profile now, to use Threds.
            </p>
            <section className="mt-9 bg-neutral-800 p-10 rounded-lg">
                <AccountProfile user={userData} btnTitle="Continue"/>
            </section>
        </main>
    );
};

export default OnboardingPage;

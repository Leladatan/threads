import {NextPage} from "next";
import AccountProfile from "@/app/(auth)/onboarding/components/AccountProfile";
import {currentUser} from "@clerk/nextjs";

const OnboardingPage: NextPage = async () => {
    const user = await currentUser();

    const userInfo = {};

    const userData = {
      id: user?.id,
      objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    };

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="text-white">
                Onboarding
            </h1>
            <p className="mt-3 text-base-regular text-white">

            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile user={userData} btnTitle="Continue"/>
            </section>
        </main>
    );
};

export default OnboardingPage;
import PageHero from "@/components/pageHero";

export function PrivacyPolicy() {

    return (
        <>
        <PageHero title="Privacy Policy" />
        <section className="relative md:py-24 py-16">
    <div className="container">
        <div className="md:flex justify-center">
            <div className="md:w-3/4">
                <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                    <h5 className="text-xl font-semibold mb-4">Information Collected:</h5>
                    <p className="text-slate-400">Our site currently does not collect any information.</p>
                   
                    <h5 className="text-xl font-semibold mb-4 mt-8">Use of Cookies:</h5>
                    <p className="text-slate-400">Our site currently does not use cookies.</p>

                    <h5 className="text-xl font-semibold mb-4 mt-8">Information Security:</h5>
                    <p className="text-slate-400">As we currently do not collect any information, we have no security in place to protect what we do not have. If we do start to use data, we will update the policy here.</p>

                    <h5 className="text-xl font-semibold mb-4 mt-8">Links to External Websites:</h5>
                    <p className="text-slate-400">As we currently do not collect any information, we have no security in place to protect what we do not have. If we do start to use data, we will update the policy here.</p>
                    <p className="text-slate-400">Some of the links on our site will be affiliate links that when you do go to the website they may collect information to allow them to recognise where you came from.This helps us by providing us with a % of what you purchase after clicking the link. If you do not like affiliate links, please feel free to visit those websites without using our link.</p>

                    <h5 className="text-xl font-semibold mb-4 mt-8">Applications:</h5>
                    <p className="text-slate-400">Some of our applications that are in development will be created using 3rd party software. Where this is true, the software owners may have their own Privacy Policy, the information for these applications will be located on their websites.</p>
                    
                    <h5 className="text-xl font-semibold mb-4 mt-8">Updating Our Privacy Policy:</h5>
                    <p className="text-slate-400">Please note that as we develop as a website, we will need to update this privacy policy, any changes will reflect on this page. We cannot let you know that they have changed at the moment, as we do not have any of your information, so pop back here from time to time and check if any changes have been made.</p>
                    
                </div>
            </div>
        </div>
    </div>
    
</section>
</>
);}

export default PrivacyPolicy;
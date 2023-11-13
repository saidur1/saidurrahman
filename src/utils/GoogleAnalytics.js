import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <div>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; 
                    function gtag()
                        {dataLayer.push(arguments)}
                        gtag('js', new Date()); gtag('config',"G-1YSD4PK63G")`}
            </Script>
        </div>
    );
};

export default GoogleAnalytics;

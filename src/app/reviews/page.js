import Reviews from "@/components/reviews/Reviews";

const ReviewsContainer = () => {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div>
            <section className="bg-gray-300 h-auto py-[50px] md:min-h-[25vh]">
                <h1 className="text-black/80 text-[50px] font-bold text-center">
                    Customer Experiences
                </h1>
                <p className="text-black/80 text-[17px] font-medium text-center dark:text-black/80">
                    Customer success is our success! See what our customers have
                    to say about working with us
                </p>
            </section>
            <section className="min-h-[calc(75vh-129px)] bg-white  pb-[100px] container ">
                <Reviews />
            </section>
        </div>
    );
};

export default ReviewsContainer;

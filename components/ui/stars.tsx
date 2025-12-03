import { FaStar } from "react-icons/fa6";

function RatingStars({ count }: { count: number }) {
    const rating = Math.floor(count)
    console.log(rating);

    return (
        <div className="flex gap-0.5 text-[12px] text-gray-500">
            {
                [1, 2, 3, 4, 5].map((item) => item > rating ? <FaStar key={item} /> : <FaStar key={item} className="text-amber-400" />)
            }

        </div>
    )


}

export default RatingStars;
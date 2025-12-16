import { FaStar } from "react-icons/fa";

function StarGroup({ count, className }: { count: number, className?: string }) {


    return (
        <div className={`flex gap-x-1 py-1 ${className}`}>
            {[1, 2, 3, 4, 5].map((data) => (
                <div key={data}>
                    {data > Math.floor(count) ? <FaStar size={16} /> : <FaStar className="text-yellow-500" size={16} />}
                </div>
            ))}

        </div>
    );
}

export default StarGroup;
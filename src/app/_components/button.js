import Link from "next/link";

const Button = ({ text, route }) => {
    return (
        <Link
            href={route}
            class="text-white text-[15px] bg-[#377A00] hover:bg-[#65973c] font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto"
        >
            {text}
        </Link>
    );
};

export default Button;

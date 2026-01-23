type CardProps = {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    iconBackgroundColor?: string;
    borderColor?: string;
};


function Card({
    icon,
    title,
    children,
    iconBackgroundColor = "bg-gray-700",
    borderColor = "bg-neutral-700" }: CardProps) {

}

export default Card;


const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="my-8 w-2/6 text-center mx-auto">
            <p className="text-[#D99904] text-lg">--- {subHeading} ---</p>
            <h1 className="border-y-4 py-4 text-4xl uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;
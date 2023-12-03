const PeopleCard = ({ poster_path, name }) => {
    return (
        <>
            <img src={poster_path}></img>
            <a>{name}</a>
        </>
    );
};

export default PeopleCard;
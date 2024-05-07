import WatchClass from "../WatchClass/WatchClass";

function WatchesList({ watches, onDelete }) {

    const elements = watches.map((item) => {
        const { id } = item;
        return (
            <WatchClass
                className='watch'
                key={id}
                item={item}
                onDelete={() => onDelete(id)}
            />
        );
    });

    return (
        <div className='d-flex flex-wrap justify-content-around'>{elements}</div>
    );
}

export default WatchesList;
import Hunter from '../classes'

const Content = () => {
    //TODO Programming logic for Trait tree for Left/Right Click [+/- Points to traits]
    //TODO Programming logic for Trait tree for Touch/- Button under tree for Mobile [+/- Points to traits]
    //TODO Programming logic for JSON compiling
    //TODO Programming logic for trait tree swap for mobile
    return (
        <div className="content">
            <div className="tree__b tree">
                <div className="tree__header">This is the header</div>
                <div className="tree__body">
                    <div className="tree__body__traits tree__body__traits--passiv">
                        {lang.map((language) => (
                            <div></div>
                        ))}
                    </div>
                    <div className="tree__body__traits tree__body__traits--activ"></div>
                </div>
            </div>
            <div className="tree__r tree"></div>
            <div className="tree__y tree"></div>
        </div>
    )
}

export default Content

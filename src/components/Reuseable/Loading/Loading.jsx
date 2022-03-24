import './Loading.scss';

const Loading = () => {
    return (
        <div id="loadingParent">
            <div className="loading">
                <svg width="200" height="200" viewBox="0 0 40 60">
                    <polygon id="loader_triangle" fill="none" stroke="#fff" strokeWidth="1" points="16,1 32,32 1,32" />
                    <text className="loader_loading_text" x="0" y="45" fill="#fff">
                        Loading...
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Loading;
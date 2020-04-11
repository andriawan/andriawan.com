const React = require('react');

exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        <div className="loader fixed inset-0 z-50 md:z-50 transition duration-500 ease-out">
            <div className="bg-white w-full h-full">
                <div className="flex flex-wrap items-center h-full justify-around mx-auto px-2 py-2">
                    <img src="/icons/icon-48x48.png" className="scale-up-center"></img>
                </div>
            </div>
        </div>
    ])
};
import { SpinePlayer, Vector2 } from "@esotericsoftware/spine-player";
import { useEffect } from "react";

const Character1 = () => {
    useEffect(() => {
        var jsonUrl = 'assets/spine/pers/Pers.json';
        var atlasUrl = 'assets/spine/pers/Pers.atlas';

        new SpinePlayer('player-container', {
            jsonUrl: jsonUrl,
            atlasUrl: atlasUrl,
            animation: 'idle',
            premultipliedAlpha: true,
            backgroundColor: '#ff0000ff',
            fullScreenBackgroundColor: "#00ff00ff",
            showControls: false,
            skin: "default"
        });
    })

    return <div id="player-container"></div>;
}

export default Character1
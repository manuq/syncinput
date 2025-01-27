import { Vector2 } from './vector2';
import { EventManager } from './event-manager';
import { Button } from './button';
import { InputHandler } from './input-handler';
export declare class MouseButton {
    static LEFT: number;
    static MIDDLE: number;
    static RIGHT: number;
    static BACK: number;
    static FORWARD: number;
}
export declare class Mouse extends InputHandler {
    positionUpdated: boolean;
    wheelUpdated: boolean;
    keys: Button[];
    position: Vector2;
    wheel: number;
    delta: Vector2;
    doubleClicked: boolean;
    domElement: HTMLElement | Window;
    canvas: HTMLCanvasElement;
    events: EventManager;
    touchHandlers: boolean;
    private tempDoubleClicked;
    private tempWheel;
    private tempDelta;
    private tempKeys;
    private tempPosition;
    constructor(element?: HTMLElement);
    initialize(): void;
    setCanvas(canvas: HTMLCanvasElement): void;
    insideCanvas(): boolean;
    setLock(value: boolean): void;
    buttonPressed(button: number): boolean;
    buttonDoubleClicked(): boolean;
    buttonJustPressed(button: number): boolean;
    buttonJustReleased(button: number): boolean;
    updatePosition(x: number, y: number, xDiff: number, yDiff: number): void;
    updateKey(button: number, action: number): void;
    update(): void;
    dispose(): void;
}

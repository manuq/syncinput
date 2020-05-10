/**
 * Key is used by Keyboard, Mouse, etc, to represent a key state.
 *
 * @class Key
 * @module Input
*/
function Key()
{
	/**
	 * Indicates if this key is currently pressed.
	 * @property pressed
	 * @default false
	 * @type {boolean}
	 */
	this.pressed = false;

	/**
	 * Indicates if this key was just pressed.
	 * @property justPressed
	 * @default false
	 * @type {boolean}
	 */
	this.justPressed = false;
	
	/**
	 * Indicates if this key was just released.
	 * @property justReleased
	 * @default false
	 * @type {boolean}
	 */
	this.justReleased = false;
}

/**
 * Down
 * @attribute DOWN
 * @type {number}
 */
Key.DOWN = -1;

/**
 * Up
 * @attribute UP
 * @type {number}
 */
Key.UP = 1;

/**
 * Reset
 * @attribute RESET
 * @type {number}
 */
Key.RESET = 0;

Key.prototype.constructor = Key;

/**
 * Update Key status based on new key state.
 * 
 * @method update
 */
Key.prototype.update = function(action)
{
	this.justPressed = false;
	this.justReleased = false;

	if(action === Key.DOWN)
	{
		if(this.pressed === false)
		{
			this.justPressed = true;
		}
		this.pressed = true;
	}
	else if(action === Key.UP)
	{
		if(this.pressed)
		{
			this.justReleased = true;
		}
		this.pressed = false;
	}
	else if(action === Key.RESET)
	{
		this.justReleased = false;
		this.justPressed = false;
	}
};

/**
 * Set this key attributes manually.
 * 
 * @method set
 */
Key.prototype.set = function(justPressed, pressed, justReleased)
{
	this.justPressed = justPressed;
	this.pressed = pressed;
	this.justReleased = justReleased;
};

/**
 * Reset key to default values.
 * 
 * @method reset
*/
Key.prototype.reset = function()
{
	this.justPressed = false;
	this.pressed = false;
	this.justReleased = false;
};

export {Key};
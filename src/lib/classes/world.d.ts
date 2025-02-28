export = WorldHandler;
/**
* @typedef {import("./client")} Client
*/
/**
 * Represents the Minecraft world the Client is in.
*/
declare class WorldHandler {
    /**
    * @param {Client} client - The Client instance.
    */
    constructor(client: Client);
    /** @type {Client} */
    client: Client;
    /** @type {string} */
    worldName: string;
    /** @type {object} */
    gameRules: object;
    /**
    * Sets the specified position to a certain block.
    * @param {Vec3} pos - The position as a Vec3.
    * @param {string} block - A Minecraft block.
    */
    setBlock(pos: Vec3, block: string): void;
    /**
    * Gets the block at the specified position.
    * @param {Vec3} pos - The position as a Vec3.
    * @returns {Promise<string>} - The block at that position.
    */
    getBlock(pos: Vec3): Promise<string>;
    /**
    * Gets all blocks in an area from start to end.
    * @param {Vec3} start - The starting position.
    * @param {Vec3} end - The ending position.
    * @returns {Promise<Array>} - An array of blocks and coordinates.
    */
    getArea(start: Vec3, end: Vec3): Promise<any[]>;
    /**
    * Fills the specified area from start to end with the given block and what blocks to replace.
    * @param {Vec3} start - The starting position.
    * @param {Vec3} end - The ending position.
    * @param {string} block - The block to fill with.
    * @param {string} replace - The block to replace.
    */
    fill(start: Vec3, end: Vec3, block: string, replace: string): void;
    /**
    * Casts a ray from the origin in the specified direction and returns the first block that is not air.
    * @param {Vec3} origin - The starting position.
    * @param {Vec3} direction - The direction of the ray.
    * @param {number} range - The length of the ray in blocks.
    * @param {number} precision - How many blocks the ray steps per check.
    */
    raycast(origin: Vec3, direction: Vec3, range: number, precision: number): Promise<any>;
    /**
    * Builds a structure from a file. Supports nbt, schem, schematic, and mcstructure.
    * @param {string} path - The path to the file.
    */
    buildStructure(path: string): void;
}
declare namespace WorldHandler {
    export { Client };
}
import { Vec3 } from "vec3";
type Client = import("./client");

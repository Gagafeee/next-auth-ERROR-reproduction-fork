import {test} from "node:test";
import assert from "node:assert";
import {authConfig} from "@/libs/auth.config";

test("Crashing test", ()=>{
    const options = authConfig;
    console.log("Options: ", options);
    assert.ok(options.debug);
})
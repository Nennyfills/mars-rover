import { should } from 'chai';
import { input } from "../src/index.js";

should();

describe("Test input rover", () => {

    it('test for inputNum', async () => {
        const res = await input(5);

        res.should.be.eql(5);
    });
});

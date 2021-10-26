import { should } from 'chai';
import Rover from "../src/marsRover.js";

should();

describe('test rover ', () => {
  it('set rover upperX and upperY', async () => {
    const result = new Rover(5, 5);

    result.upperX.should.eql(5);
    result.upperY.should.eql(5);
  });

  it('test setPosition to N', async () => {
    const result = new Rover(5, 5);
    result.setPosition(1, 2, 'N')

    result.x.should.eql(1);
    result.y.should.eql(2);
    result.N.should.eql(1);
  });
  it('test setPosition to E', async () => {
    const result = new Rover(5, 5);
    result.setPosition(0, 0, 'E')

    result.x.should.eql(0);
    result.y.should.eql(0);
    result.E.should.eql(2);
  });
  it('test setPosition to S', async () => {
    const result = new Rover(5, 5);
    result.setPosition(5, 9, 'S')

    result.x.should.eql(5);
    result.y.should.eql(9);
    result.S.should.eql(3);
  });
  it('test setPosition to W', async () => {
    const result = new Rover(5, 5);
    result.setPosition(1, 1, 'W')

    result.x.should.eql(1);
    result.y.should.eql(1);
    result.W.should.eql(4);
  });

  it('test printPosition and setPosition with small letter', async () => {
    const result = new Rover(1, 5);
    result.setPosition(1, 3, 'w')
    result.processRover('lmlmlmlmm');
    const output = result.printPosition();
    output.should.eql('0 3 W');
  });

  it('test leftTurn ', async () => {
    const result = new Rover(4, 5);
    result.setPosition(1, 3, 'N')
    result.leftTurn();
    
    result.facing.should.eql(4);
  });

  it('test rightTurn', async () => {
    const result = new Rover(3, 5);
    result.setPosition(1, 3, 'W')
    result.rightTurn();
    
    result.facing.should.eql(1);
  });

  it('test move for N', async () => {
    const result = new Rover(1, 5);
    result.setPosition(1, 3, 'N')
   result.rightTurn();
    
    result.y.should.eql(3);
  });

  it('test move for E', async () => {
    const result = new Rover(1, 5);
    result.setPosition(1, 3, 'E')
   result.rightTurn();
    
    result.x.should.eql(1);
  });

  it('test move for S', async () => {
    const result = new Rover(6, 5);
    result.setPosition(6, 2, 'S')
   result.rightTurn();
    
    result.y.should.eql(2);
  });

  it('test move for W', async () => {
    const result = new Rover(2, 5);
    result.setPosition(6, 2, 'W')
   result.rightTurn();
    
    result.x.should.eql(6);
  });

  it('test printPosition and processMovement with expected data', async () => {
    const result = new Rover(5, 5);
    result.setPosition(1, 2, 'W')
    result.processRover('LMLMLMLMM');
    const output = result.printPosition();

    output.should.eql('0 2 W');
  });

  it('test printPosition and processMovement with small letter data', async () => {
    const result = new Rover(5, 5);
    result.setPosition(1, 2, 'W')
    result.processRover('mmrmmrmrrm');
    const output = result.printPosition();

    output.should.eql('-1 4 W');
  });
  it('test printPosition and processMovement with unexpected data', async () => {
    const result = new Rover(1, 5);
    result.setPosition(1, 'E', 'W')
    result.processRover('LLADSDMM');
    const output = result.printPosition();

    output.should.eql('Your input is not a Mars language');
  });

});


import Matter from 'matter-js';

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let bird = entities.bird.body;

    Matter.Engine.update(engine, time.delta);

    return entities;
};

export default Physics;
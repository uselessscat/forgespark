function normalDistributionRandom(center = 0, stdev = 1) {
    const u = 1 - Math.random();
    const v = Math.random();

    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    return z * stdev + center;
}
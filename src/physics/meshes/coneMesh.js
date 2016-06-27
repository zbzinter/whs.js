import {Mesh} from '../core/mesh';

export class ConeMesh extends Mesh {
  constructor(geometry, material, mass) {
    super(geometry, material, mass);

    if (!geometry.boundingBox) geometry.computeBoundingBox();

    const width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
    const height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

    this._physijs.type = 'cone';
    this._physijs.radius = width / 2;
    this._physijs.height = height;
    this._physijs.mass = (typeof mass === 'undefined') ? width * height : mass;
  }
}

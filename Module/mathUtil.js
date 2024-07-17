

export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return radius * PI * radius;
}

export function getVolume(radius, height) {
  return PI * radius * radius * height;
}

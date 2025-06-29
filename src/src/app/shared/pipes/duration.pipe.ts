import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform{
    // Add your code here
    transform(value: number): string {
    if (value == null || isNaN(value)) {
      return '';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    // Determine singular/plural "hour"/"hours"
    const hourLabel = hours === 1 ? 'hour' : 'hours';

    return `${paddedHours}:${paddedMinutes} ${hourLabel}`;
  }
}

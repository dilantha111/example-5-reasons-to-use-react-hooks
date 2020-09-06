import { Subject } from "rxjs";

export function getCounts() {
  const subject = new Subject();
  let count = 0;
  const interval = setInterval(() => {
    if (count > 10 || subject.isStopped) {
      clearInterval(interval);
      subject.complete();
    }
    subject.next(count++);
  }, 1000);

  return subject;
}

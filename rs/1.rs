use std::fs;

fn main() {
    let data = fs::read_to_string("../../src/1.txt").expect("To read file");
    let lines = data.lines();

    let mut highest = lines.fold(Vec::new(), |mut a, b| {
        if b == "" || a.len() == 0 {
            a.push(0);
        } else {
            let c = a.last_mut().expect("Should be a number");
            *c += b.parse::<i32>().expect("Should be a number");
        }
        return a;
    });

    highest.sort();
    highest.reverse();

    println!("Part 1: {}", highest[0]);
    println!("Part 2: {}", highest[0] + highest[1] + highest[2])
}

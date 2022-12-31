use std::fs;

fn main() {
    let data = fs::read_to_string("../../src/1.txt").expect("To read file");

    let mut highest = data.lines().fold(Vec::new(), |mut a, b| {
        if b == "" || a.len() == 0 {
            a.push(0);
        } else {
            let c = a.last_mut().expect("Should be a number");
            *c += b.parse::<u32>().expect("Should be a number");
        }
        return a;
    });

    highest.sort();
    highest.reverse();

    println!("Part 1: {}", highest[0]);
    println!("Part 2: {}", highest.iter().take(3).sum::<u32>())
}

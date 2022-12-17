import System.IO
import Data.List

totalUp:: [Int] -> Int -> [Int]
totalUp arr num = 
  if num == 0 || length arr == 0
  then arr ++ [0]
  else init arr ++ [num + last arr]

repla :: String -> String
repla "" = "0"
repla str = str

part1 = maximum . foldl' totalUp [] .map read . map repla . lines <$> readFile "../src/1.txt" >>= print
part2 = sum . take 3 .reverse . sort . foldl' totalUp [] .map read . map repla . lines <$> readFile "../src/1.txt" >>= print

main :: IO ()
main = do {part1; part2}
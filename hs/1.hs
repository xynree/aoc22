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

main :: IO ()
main = do 
  ints:: [Int] <- foldl totalUp [] .map read . map repla . lines <$> readFile "../src/1.txt"
  let part1 = maximum ints
  let part2 = (sum . take 3 .reverse .sort)ints
  print part1
  print part2

            
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
  f <- readFile "../../src/1.txt"
  let i:: [Int] = ( foldl totalUp [] .map read . map repla . lines) f
  let part1 = maximum i
  let part2 = (sum . take 3 .reverse .sort)i
  print part1
  print part2

            
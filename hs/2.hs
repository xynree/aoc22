import System.IO


repl 'A' = 1
repl 'X' = 1
repl 'B' = 2
repl 'Y' = 2
repl 'C' = 3
repl 'Z' = 3


win a = (+) 6 a
draw a = (+) 3 a

getWin a = if (+) 1  a < 4 then (+) 1 a else 1

calc a b = (3 + a - b) `mod` 3

compare1 arr = 
  if (arr !! 0 == arr !! 1) 
  then draw arr !! 1
  else case calc (arr !! 0) (arr !! 1) of
    1 -> arr !! 1
    2 -> win (arr !! 1)
  


main :: IO ()
main = map words . lines <$> readFile "../src/2.txt" >>= print

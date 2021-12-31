using System;

namespace ConsoleGame
{
  class Game : SuperGame
  {
        public static new void UpdatePosition(string key, out int x, out int y )
        {

            switch (key)
            {
                case "DownArrow":
                    y = 1;
                    x = 0;
                    break;
                case "UpArrow":
                    y = -1;
                    x = 0;
                    break;
                case "LeftArrow":
                    x = 1;
                    y = 0;
                    break;
                case "RightArrow":
                    x = -1;
                    y = 0;
                    break;
                case "Spacebar":
                    x = 0;
                    y = 0;
                    break;
                default:
                    x = 0;
                    y = 0;
                    break;
            }   
        }
        public static new char UpdateCursor(string key)
        {
            switch (key)
            {
                case "DownArrow":
                    return 'v';
                case "UpArrow":
                    return '^';
                case "LeftArrow":
                    return '<';
                case "RightArrow":
                    return '>';
                default:
                    return '>';
            }
        }
        public static new int KeepInBounds(int coor, int max)
        {
            if (coor >= max)
                return max - 1; 
            else if (coor < 0)
                return 0;
            return coor;
            
        }

        public static new bool DidScore(int charX, int charY, int fruitX, int friutY)
        {
            return (charX == fruitX && charY == friutY) ? true : false;
               
        }
    }
}
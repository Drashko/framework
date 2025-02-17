<?php
declare(strict_types=1);

namespace src\Utility;

use JetBrains\PhpStorm\NoReturn;

class Route
{
    /**
     * @param null $url
     * @return array
     */
   public static function getUrlParam($url = null): array
   {
       $url = ($url) ? $url : $_SERVER['REQUEST_URI'];
       $params = [];
       if ($url != '') {
           $queryString = parse_url($url,  PHP_URL_QUERY);
           if($queryString)
               parse_str($queryString, $params);
       }
       return $params;
   }

    /**
     * @param $data
     * @return mixed
     */
   public static function setFilterParam($data): string
   {
       $queryString = '';
       foreach($data as $key => $value){
           if(str_contains($key,'/') OR (str_contains($key,'page'))) continue;
             $queryString .= '&' . $key . '=' . $value;
       }
       return $queryString;
   }

    /**
     * @param string|null $http
     */
    #[NoReturn] public static function redirect(string $http = null)
    {
        if ($http) {
            $redirect = INDEX_URL . $http;
        } else {
            $redirect = $_SERVER['HTTP_REFERER'] ?? "/";
        }
        header("location:" . $redirect, true, 303);
        exit;
    }
}
# Lab11  设计文档

##功能

cookie和session都是为了补全网站的功能，由于http信息是无状态的协议，一旦数据交换完毕,
客户端与服务器的链接就会关闭，再次交换数据需要建立新的链接，这就意味者服务器无法在链接上跟踪会话。
因此引入cookie，服务器可以设置或读取Cookies中包含信息，借此维护用户跟服务器会话中的状态。
session是一种服务器端的机制，其对象用来存储特定用户会话所需的信息。

##advantages & disadvantages

###1.cookie优点：

①只需要设置Cookie的过期时间属性为一个很大很大的数字，Cookie就可以在浏览器保存很长时间。

②Cookie保管在客户端，不占用服务器资源。

③Cookie支持跨域名访问。

###2.cookie缺点：

①Cookie中只能保管ASCII字符串，假如需求存取Unicode字符或者二进制数据，需求先进行编码，
Cookie中也不能直接存取Java对象。若要存储略微复杂的信息，运用Cookie是较为艰难的。

②Cookie存储在浏览器中，对客户端是可见的，客户端的一些程序可能会窥探、复制以至修正Cookie中的内容。 

###3.session优点

①Session中能够存取任何类型的数据，包括而不限于String、Integer、List、Map等，
Session中也能够直接保管Java Bean乃至任何Java类，对象等。

②Session存储在服务器上，对客户端是透明的，不存在敏感信息泄露的风险。

###4.session缺点

①Session是保管在服务器端的，每个用户都会产生一个Session。假如并发访问的用户十分多，会产生十分多的Session，耗费大量的内存。

②Session不支持跨域名访问。

   









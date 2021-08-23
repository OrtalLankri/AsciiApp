using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]/{action}/{id}")]
    public class AsciiSumController : ControllerBase
    {
        private readonly ILogger<AsciiSumController> _logger;

        public AsciiSumController(ILogger<AsciiSumController> logger)
        {
            _logger = logger;
        }
        Dictionary<string,string> wordsDict=new Dictionary<string, string>()
        {
            {"שלום","hello"},
            {"ישראל","israel"},
            {"קורונה","corona"},
            {"שמיים","sky"},
            {"תכנות","programming"}
        };
        [HttpGet]
        public string CalculateSum(string id)
        {
            try
            {
                string word= wordsDict[id];
            }
            catch(Exception e)
            {
                return "word is not in the dictionary!";
            }
            
            int sumAscii=0;
            byte[] ASCIIValues = Encoding.ASCII.GetBytes(wordsDict[id]);
            foreach(byte b in ASCIIValues) 
            {
                sumAscii+=b;
            }
            return sumAscii.ToString();
        }
    }
}
